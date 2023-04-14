import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { ContactIconsList } from "../ContactIcons/ContactIcons";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,

    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [{iconBrand: IconBrandInstagram,link: "https://www.instagram.com/kamptech11/"}, {iconBrand:IconBrandTwitter , link:"https://twitter.com/Kamptech11/"}, {iconBrand:IconBrandFacebook, link:"https://www.facebook.com/profile.php?id=100091748850716&mibextid=ZbWKwL"}, {iconBrand:IconBrandLinkedin, link:"https://www.linkedin.com/company/kamptech-solutions/"}];

const EmailBanner = () => {
  const { classes } = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name.length<=0 || !re.test(email) || msg.length<=0) {
      toast.warn("Please fill valid details!", {
        position: toast.POSITION.TOP_CENTER
      });
      setLoading(false);
      return;
    };

    var templateParams = {
      to_email : email,
      from_email: email,
      from_name: name,
      message: msg,
    }

    emailjs.send('service_jg8u3bi', 'template_5ll11hj', templateParams, 'UsSzvVbDEpk0x3aR0')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent Successfully!", {
            position: toast.POSITION.TOP_CENTER
          });

          setName('');
          setEmail('');
          setMsg('');
          setLoading(false);
          
      }, (error) => {
          console.log(error.text);
          toast.error("Some Error Occurred!", {
            position: toast.POSITION.TOP_LEFT
          });
          setLoading(false);
      });
  };

  const icons = social.map((obj, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      
    >
      <Link href={obj.link}>
      
      <obj.iconBrand size="1.4rem" stroke={1.5} />
      </Link>
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper} id="contact_us">
      <ToastContainer />
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
        <form ref={form} onSubmit={sendEmail} className={classes.form}>

          <TextInput
            label="Email"
            placeholder="Your email address"
            required
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
            />
          <TextInput
            label="Name"
            placeholder="Your Full Name"
            mt="md"
            required
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Leave us a message :)"
            minRows={4}
            mt="md"
            name="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            {/* <Button className={classes.control}>Send message</Button> */}
            <button className={loading? "text-white font-semibold text-sm px-3 py-2 rounded-md bg-blue-600 cursor-not-allowed" :"text-white font-semibold text-sm px-3 py-2 rounded-md bg-blue-600"}>{loading ? "Sending..."  : "Send message"}</button>
          </Group>
            </form>
      </SimpleGrid>
    </div>
  );
};

export default EmailBanner;
