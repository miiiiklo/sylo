export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function submitInquiry(data: Inquiry): Promise<void> {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result: { error?: string } = {};

  try {
    result = await response.json();
  } catch {
  }

  if (!response.ok) {
    throw new Error(result.error || "Pošiljanje povpraševanja ni uspelo.");
  }
}