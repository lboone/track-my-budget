import { MyUserButton } from "@/components/myclerk";
import { Popover, Descriptions, DescriptionsProps } from "antd";

import UserType from "@/types/UserType";

const MyUserCard = async ({loggedInUser} : {loggedInUser?: UserType | null}) => { 
  if(!loggedInUser || loggedInUser === null){
    return (
      <div>  
        <MyUserButton />
      </div>
    )
  } else {
    const popoverItems: DescriptionsProps['items'] = [
      {
        key: '1',
        label: 'Name',
        children: loggedInUser?.name,
      },
      {
        key: '2',
        label: 'Username',
        children: loggedInUser?.username,
      },
      {
        key: '3',
        label: 'Email',
        children: loggedInUser?.email,
      },
      {
        key: '4',
        label: 'Clerk User ID',
        children: loggedInUser?.clerkUserId,
      }
    ]
    const content = (
      <Descriptions
        bordered
      title="User Details"
      size='middle'
      column={1}
      items={popoverItems}
    />
    )
    return (
      <div className="flex flex-row gap-3 items-center">
        <Popover content={content}>
          <div className="text-white text-1xl">{loggedInUser?.name}</div>
        </Popover>
        <MyUserButton />
      </div>
    );
  }

};

export default MyUserCard;
