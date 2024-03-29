import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState, FormEvent, useEffect, useContext } from "react";
import { supabase } from "../utils/supabase";
import { SessionContext } from "../pages/_app";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

// メニュー項目
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Blogs",
    children: [
      {
        label: "1. Next.js",
        href: "/blogs/1",
      },
      {
        label: "2. React",
        href: "/blogs/2",
      },
      {
        label: "3. データベース",
        subLabel: "RDS, Supabase",
        href: "/blogs/3",
      },
      {
        label: "X. アプリのデプロイ",
        subLabel: "IBM Cloud, Vercel, Firebase",
        href: "/blogs/3",
      },
    ],
  },
  {
    label: "Genres",
    children: [
      {
        label: "Create new genre",
        subLabel: "ジャンルの新規作成",
        href: "/genres/create",
      },

      {
        label: "Genres List",
        subLabel: "ジャンルの一覧・削除・更新",
        href: "/genres",
      },
    ],
  },
  {
    label: "Couplings",
    children: [
      {
        label: "Create new coupling",
        subLabel: "カップリングの新規作成",
        href: "/couplings/create",
      },
      {
        label: "Couplings List",
        subLabel: "カップリングの一覧・削除・更新",
        href: "/couplings",
      },
    ],
  },
  {
    label: "Fanfics",
    children: [
      {
        label: "Create new fanfic",
        subLabel: "オン作品の新規作成",
        href: "/fanfics/create",
      },
      {
        label: "Fanfics List",
        subLabel: "オン作品の一覧・削除・更新",
        href: "/fanfics",
      },
    ],
  },
  {
    label: "Fanbooks",
    children: [
      {
        label: "Create new fanbook",
        subLabel: "オフ本の新規作成",
        href: "/fanbooks/create",
      },
      {
        label: "Fanbooks List",
        subLabel: "オフ本の一覧・削除・更新",
        href: "/fanbooks",
      },
    ],
  },
];

const HeaderForLoggedInUser = () => {
  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast();
  const router = useRouter();

  const session = useContext(SessionContext);
  console.log(`Headerから見たsession: ${session}`);

  // サインアウト
  const onClickLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: "LogOut Failure",
        description: "We've created your account for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    toast({
      title: "Successfully Logged out",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push("/");
  };

  const onClickSignIn = () => {
    router.push("/signin");
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("blackAlpha.200", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("blackAlpha.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href="/">FandomApp</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {session === undefined ? (
            <>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                onClick={onClickSignIn}
              >
                Sign In
              </Button>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
                onClick={onClickSignUp}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={onClickLogOut}
            >
              Log Out
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default HeaderForLoggedInUser;

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? ""}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
