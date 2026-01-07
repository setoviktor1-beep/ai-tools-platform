// lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendProductEmail({
  to,
  productName,
  downloadUrl,
}: {
  to: string
  productName: string
  downloadUrl: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'V.Praxis <orders@vpraxis.ink>',
      to: [to],
      subject: `Your purchase: ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank you for your purchase! 🎉</h1>
          
          <p>You've successfully purchased <strong>${productName}</strong>.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Download your product:</h2>
            <a href="${downloadUrl}" 
               style="display: inline-block; background: #0070f3; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 6px; font-weight: bold;">
              Download Now
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This download link will expire in 1 year. Please save the file to your device.
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px;">
            Questions? Reply to this email or visit <a href="https://vpraxis.ink/contact">vpraxis.ink/contact</a>
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}
