export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { success: false, error: result.error || 'Failed to send message' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}