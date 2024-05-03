import { MyUserCard } from '@/components/myclerk';
import { connectMongoDb } from '@/config/db-connection';

connectMongoDb();
export default function Home() {
  return (
    <div><MyUserCard /></div>
  );
}
