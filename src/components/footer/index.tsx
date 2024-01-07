import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Text = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm">{children}</p>;
};

export default function Footer() {
  return (
    <footer className="px-[132px] py-10 bg-neutral-150">
      <div className="grid grid-flow-col gap-16">
        <section className="flex flex-col gap-3">
          <p className="text-xl font-bold">Support</p>
          <Text>Irure in molli</Text>
          <Text>Officia sit laborum</Text>
          <Text>Lorem ea quis labore</Text>
        </section>
        <section className="flex flex-col gap-3">
          <b className="text-xl font-bold">Community</b>
          <Text>Nisi velit ut</Text>
          <Text>Pariatur elit esse</Text>
          <Text>Laborum aliquip do</Text>
        </section>
        <section className="flex flex-col gap-3">
          <b className="text-xl font-bold">About</b>
          <Text>Aute com</Text>
          <Text>Volupta</Text>
          <Text>Nulla min</Text>
        </section>
        <section className="flex flex-col gap-3">
          <b className="text-xl font-bold">Subscribe to our newsletter</b>
          <Text>For announcements and exclusive deals</Text>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              className="focus-visible:ring-0 focus-visible:shadow-none focus-visible:ring-offset-0"
              type="email"
              placeholder="Email"
            />
            <Button
              className="hover:bg-primary-600 bg-primary-500 text-white"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </footer>
  );
}
