import { Button } from "../ui/button"
import { ContainerFormBody } from "../ui/container"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
} from "../ui/dialog"

interface ConfirmCloseModalProps {
  isOpen: boolean
  closeModal: (y: boolean) => void
}

export const ConfirmCloseModal = (props: ConfirmCloseModalProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.closeModal}>
      <DialogPortal>
        <DialogContent className="w-full !max-w-[410px]">
          <ContainerFormBody>
            <div className="p-3.5 bg-primary-background rounded-full w-fit mx-auto">
              <span className="relative flex w-12 h-12">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary1-border opacity-75"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative inline-flex w-12 h-12 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="text-center">
              <div className="text-heading-6 text-typography-title mb-2">
                Thoát mà không lưu?
              </div>
              <div className="text-body-3 text-typography-body">
                Thông tin bạn nhập sẽ không được hệ thống lưu lại
              </div>
            </div>
          </ContainerFormBody>
          <DialogFooter className="!justify-between border-none">
            <Button
              size={"default"}
              className="w-full"
              variant={"outline"}
              onClick={() => props.closeModal(false)}
            >
              Quay lại
            </Button>
            <Button
              size={"default"}
              className="w-full"
              variant={"default"}
              onClick={() => {
                props.closeModal(true)
              }}
            >
              Thoát
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
