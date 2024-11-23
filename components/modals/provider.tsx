"use client"

import { useEffect, useState } from "react"
import { AccountSettingsModal } from "./account-settings-modal"
import { DeleteAccountModal } from "./delete-account-modal"
import { CreditsModal } from "./credits-modal"

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AccountSettingsModal />
      <DeleteAccountModal />
      <CreditsModal />
    </>
  )
}

