/**
 * @components
 */
import { Container } from "../../components/Container/Container";
import {
  AvatarOptions,
  Banner,
  Description,
  FollowingsFollowers,
  LocationMoment,
  NameUsername,
} from "../../components/ProfileHero";

export const ProfileHero = () => {
  return (
    <>
      <Banner />
      <Container>
        <AvatarOptions />
        <NameUsername />
        <Description />
        <LocationMoment />
        <FollowingsFollowers />
      </Container>
    </>
  );
};
