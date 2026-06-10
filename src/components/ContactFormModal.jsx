import { Button, Form, Input, Modal, Select, message } from "antd";

const projectOptions = [
  { value: "buy", label: "Acheter" },
  { value: "sell", label: "Vendre" },
  { value: "rent", label: "Louer" },
  { value: "visit", label: "Demander une visite" },
  { value: "estimate", label: "Estimation" },
];

export default function ContactFormModal({ open, onClose }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.info("Contact request", values);
    message.success("Votre demande a ete envoyee.");
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Contacter l'agence"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handleSubmit}
        className="pt-2"
      >
        <Form.Item
          name="name"
          label="Nom complet"
          rules={[{ required: true, message: "Entrez votre nom." }]}
        >
          <Input size="large" placeholder="Votre nom" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telephone"
          rules={[{ required: true, message: "Entrez votre telephone." }]}
        >
          <Input size="large" placeholder="+212 ..." />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: "email", message: "Email invalide." },
          ]}
        >
          <Input size="large" placeholder="vous@email.com" />
        </Form.Item>

        <Form.Item
          name="project"
          label="Projet"
          rules={[{ required: true, message: "Choisissez votre projet." }]}
        >
          <Select
            size="large"
            placeholder="Choisir un projet"
            options={projectOptions}
          />
        </Form.Item>

        <Form.Item name="message" label="Message">
          <Input.TextArea
            rows={4}
            placeholder="Parlez-nous rapidement de votre besoin..."
          />
        </Form.Item>

        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <Button size="large" onClick={onClose}>
            Annuler
          </Button>
          <Button
            size="large"
            htmlType="submit"
            className="!bg-primary !border-primary !text-white hover:!bg-primary/90"
          >
            Envoyer
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
