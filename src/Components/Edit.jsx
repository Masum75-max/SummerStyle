"use client";
import { authClient } from "@/lib/auth-client"
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function Edit() {

    const onSubmit = async (e) => {
        e.preventDefault();
        const name =e.target.name.value;
        const image =e.target.image.value;

     const {data} =   await authClient.updateUser({
      image: image,
       name: name
})

  console.log(data);

    }
  return (
    <Modal>
      <Button variant="secondary">Edit Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
           
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text" variant="secondary">
                    <Label>Image</Label>
                    <Input placeholder="Give your photo URL" />
                  </TextField>
                     <Button slot="close" type="submit">Update</Button>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}