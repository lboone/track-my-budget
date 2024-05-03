import { Button, Flex, Input } from 'antd';
export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <Flex gap="small" wrap>
        <Button type="primary" shape="round">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed" shape="round">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
      <Input placeholder="Enter your budget" />
    </div>
  );
}
