import { log } from 'logger';
import { CounterButton } from 'ui';
import Link from 'next/link';

export default function Store() {
  log('Hey! This is Home.');
  return (
    <div>
      <h1>Store</h1>
      <CounterButton />
      <Link href="/petlist">
        <a>Pet List</a>
      </Link>
    </div>
  );
}
