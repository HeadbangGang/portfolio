export const formatPhoneNumber = (phone: string) => {
  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6)}`
}
