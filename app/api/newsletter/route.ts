import { NewsletterAPI } from 'pliny/newsletter';
import siteMetadata from '@/data/siteMetadata';

/* The code is creating a handler function using the `NewsletterAPI` function. The `NewsletterAPI`
function is being passed an object with a `provider` property, which is set to the value of
`siteMetadata.newsletter.provider`. */
const handler = NewsletterAPI({
  // @ts-ignore
  provider: siteMetadata.newsletter.provider,
});

export { handler as GET, handler as POST };
