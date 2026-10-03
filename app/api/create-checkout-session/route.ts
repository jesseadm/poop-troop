import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
})

const PLANS = {
  starter: {
    stripePriceId: 'price_starter_monthly',
    priceAmount: 1500,
  },
  regular: {
    stripePriceId: 'price_regular_monthly',
    priceAmount: 3500,
  },
  premium: {
    stripePriceId: 'price_premium_monthly',
    priceAmount: 6000,
  },
}

export async function POST(request: NextRequest) {
  try {
    const { plan, customer } = await request.json()

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json(
        { message: 'Invalid plan selected' },
        { status: 400 }
      )
    }

    if (!customer.email || !customer.firstName) {
      return NextResponse.json(
        { message: 'Missing required customer information' },
        { status: 400 }
      )
    }

    const planData = PLANS[plan as keyof typeof PLANS]

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: customer.email,
      client_reference_id: `${customer.email}_${Date.now()}`,
      metadata: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        zip: customer.zip,
        phone: customer.phone,
        petType: customer.petType,
        numberOfPets: customer.numberOfPets,
      },
      subscription_data: {
        trial_period_days: 30, // Free first month
        metadata: {
          plan,
          customerEmail: customer.email,
        },
      },
      line_items: [
        {
          price: planData.stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscribe?plan=${plan}`,
    })

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error('Checkout session creation error:', error)
    return NextResponse.json(
      { message: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
