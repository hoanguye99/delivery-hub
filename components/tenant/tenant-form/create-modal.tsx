import { ConfirmCloseModal } from "@/components/common/confirm-close-modal"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
} from "@/components/ui/dialog"
import { useState } from "react"
import TenantForm from "./form"
import { useCreateTenant } from "./hook"
import { useGetAccessToken } from "@/hooks/query/auth"

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

const CreateTenantModal = (props: ModalProps) => {
  const accessToken = useGetAccessToken()
  const [isConfirmCloseModal, setIsConfirmCloseModal] = useState(false)
  const closeModal = () => {
    setIsConfirmCloseModal(true)
  }
  const { form, onSubmit, mutation } = useCreateTenant(
    accessToken,
    props.closeModal
  )
  return (
    <>
      <Dialog open={props.isOpen} onOpenChange={closeModal}>
        <DialogPortal>
          <DialogContent>
            <DialogHeader>Create General</DialogHeader>
            <TenantForm form={form} />
            <DialogFooter>
              <Button onClick={() => closeModal()} variant={"link"}>
                Close
              </Button>
              <Button
                variant={"default"}
                size={"sm"}
                type={"button"}
                onClick={() => form.handleSubmit(onSubmit)()}
                posting={mutation.isPending}
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
      <ConfirmCloseModal
        closeModal={(y) => {
          if (!y) setIsConfirmCloseModal(false)
          else {
            setIsConfirmCloseModal(false)
            props.closeModal()
            form.reset()
          }
        }}
        isOpen={isConfirmCloseModal}
      />
    </>
  )
}

export default CreateTenantModal
