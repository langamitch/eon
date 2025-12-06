import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    
        <Navbar />
   
      <div className="flex flex-col">
        <aside className="sticky top-0 hidden lg:flex lg:min-h-full lg:w-full lg:max-w-sm lg:flex-col lg:items-stretch lg:pt-12 xl:max-w-md">
          <div className="top">
            <h1>Welcome Bash</h1>
            <h1 className="muted">Manage your Stripe AI account</h1>
          </div>
        </aside>
      </div>
    </>
  );
}
