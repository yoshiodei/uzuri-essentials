'use client'
import { useRouter } from 'next/navigation';


export default function Index() {
  const router = useRouter();

  return (
    <div className="bg-primary w-full h-[100vh] flex justify-center items-center">
      <h3>Welcome</h3>
      <button onClick={() => router.push('/kente')}>Explore</button>
    </div>  
  );
}