import { Button } from './ui/button';
import { deleteInvoice } from '@/app/lib/actions';
import { Icons } from './ui/icons';

export default function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="outline" size="icon">
        <Icons.trashcan className="h-4 w-4" />
      </Button>
    </form>
  );
}
