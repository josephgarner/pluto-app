import {
  PasswordInput,
  Title,
  Flex,
  Code,
  Container,
  Center,
  Button,
  Stack,
  TextInput,
} from "@mantine/core";
import Image from "next/image";

export default async function Home() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="xl"
      mih={"100vh"}
    >
      <Title size={42}>Project Pluto</Title>
      <Image
        src={"/content/undraw_spreadsheet_uj8z.svg"}
        alt={"Spreadsheet image"}
        width={500}
        height={300}
      />
      <Button>Login</Button>
    </Flex>
  );
}
