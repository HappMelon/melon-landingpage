import { useIsConnected } from "@crossbell/connect-kit"
import { useShowNotificationModal } from "@crossbell/notification"

export function NotificationBtn() {
  const isConnected = useIsConnected()
  const showNotificationModal = useShowNotificationModal()

  if (!isConnected) return null

  return (
    <button
      onClick={showNotificationModal}
      className="i-fa6-regular-bell w-2.5rem"
    />
  )
}
