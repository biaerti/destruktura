import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Brakuje wymaganych pól' });
  }

  try {
    await resend.emails.send({
      from: 'Destruktura <kontakt@destruktura.pl>',
      to: 'kontakt@destruktura.pl',
      replyTo: email,
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Błąd wysyłania wiadomości' });
  }
}
