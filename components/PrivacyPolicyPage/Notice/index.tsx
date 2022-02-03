import {
  Div,
  TextBlock,
  Wrapper,
  H3,
  Button
} from "./Notice.style";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Notice = () => {
  const [shouldClose, setShouldClose] = useState<string>('true');
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const shouldShowNotice =  shouldClose === 'true' || currentUrl.includes('privacy_policy');
  const router = useRouter();

  useEffect(() => {
    setShouldClose(window.localStorage.getItem('privacyPolicy') || 'false');
  }, []);

  useEffect(() => {
    setCurrentUrl(router.pathname);
  }, [router.pathname]);

  return (
    <Div shouldShowNotice={shouldShowNotice}>
      <Wrapper>
        <TextBlock>
          <H3>This site uses cookies to improve your user experience.
            <Link href={'/privacy_policy'}>
              <a>Read More</a>
            </Link>
          </H3>

          <Button onClick={() => {
            setShouldClose('true');
            window.localStorage.setItem('privacyPolicy', 'true');
          }}>
            <a>Accept</a>
          </Button>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default Notice;
