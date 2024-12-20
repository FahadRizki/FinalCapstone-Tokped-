
import { Button, Modal } from "flowbite-react";
import { useState } from "react";


export function ButtoModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button color="green" onClick={() => setOpenModal(true)}>Bayar Sekarang</Button>
      <Modal  show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header className="bg-white"/>
        <Modal.Body className="bg-white">
          <div className="text-center">
            <img className="mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiii8wb4kM_FoOLumBcrUnJZr41T0GVfgLWw&s" alt="" />
            <h3 className="mb-5 text-lg font-bold ">
              Yey, Pembayaran Berhasil!
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="green" onClick={() => setOpenModal(false)}>
                {"Kembali"}
              </Button>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ButtoModal
