import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const users = [
  {
    user: 'User001',
    subscriptionStatus: 'Premium',
    totalContestJoined: '25',
    totalContestWon: '5',
    referals: '1',
  },
  {
    user: 'User002',
    subscriptionStatus: 'Regular',
    totalContestJoined: '15',
    totalContestWon: '2',
    referals: '0',
  },
  {
    user: 'User003',
    subscriptionStatus: 'Regular',
    totalContestJoined: '35',
    totalContestWon: '8',
    referals: '9',
  },
  {
    user: 'User004',
    subscriptionStatus: 'Premium',
    totalContestJoined: '45',
    totalContestWon: '12',
    referals: '6',
  },
  {
    user: 'User005',
    subscriptionStatus: 'Premium',
    totalContestJoined: '55',
    totalContestWon: '10',
    referals: '4',
  },
  {
    user: 'User006',
    subscriptionStatus: 'Regular',
    totalContestJoined: '20',
    totalContestWon: '4',
    referals: '0',
  },
  {
    user: 'User007',
    subscriptionStatus: 'Regular',
    totalContestJoined: '30',
    totalContestWon: '0',
    referals: '0',
  },
];

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/Manuel-co.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export function Tablecontest() {
  return (
    <Table className="w-[90%] shadow-xl m-5 ">
      <TableCaption>A list of recent user activity in contests.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Contests Won</TableHead>
          <TableHead>Contests Joined</TableHead>
          <TableHead className="text-right">Referals</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.user}>
            <TableCell className="font-medium">
              <AvatarDemo />
            </TableCell>
            <TableCell>{user.subscriptionStatus}</TableCell>
            <TableCell>{user.totalContestWon}</TableCell>
            <TableCell className="">
              {user.totalContestJoined}
            </TableCell>
            <TableCell className="text-right">
              {user.referals}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">225 Contests Joined</TableCell>
          </TableRow>
        </TableFooter> */}
    </Table>
  );
}
