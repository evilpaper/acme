import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { deleteInvoice } from '@/app/lib/actions';

export default function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="outline" size="icon">
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
}
