import { fetchLatestInvoices } from '@/app/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="space-y-8">
      {latestInvoices.map((invoice) => {
        return (
          <div className="flex items-center" key={invoice.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={invoice.image_url} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="font-medium leading-none">{invoice.name}</p>
              <p className="text-muted-foreground">{invoice.email}</p>
            </div>
            <div className="ml-auto font-medium">{invoice.amount}</div>
          </div>
        );
      })}
    </div>
  );
}
