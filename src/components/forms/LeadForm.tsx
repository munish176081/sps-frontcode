"use client";

import DynamicForm from "../modals/DynamicForm";
import { formSchemas } from "../modals/formSchemas";

type Props = {
  schema: [] | any;
};

export default function LeadForm({ schema = formSchemas.contact }: Props) {
  return <DynamicForm schema={schema} />;
}