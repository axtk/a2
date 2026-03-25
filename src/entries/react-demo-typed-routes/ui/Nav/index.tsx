import { A, useRoute } from "react-stateshape";
import { url } from "../../utils/url.ts";

export const Nav = () => {
  let { at } = useRoute();

  return (
    <nav>
      <p>
        {at(url("/"), <span>Intro</span>, <A href={url("/")}>Intro</A>)}
        {" | "}
        {at(
          url("/about"),
          <span>About</span>,
          <A href={url("/about")}>About</A>,
        )}
        {" | "}
        {at(
          url("/sections/:id", { params: { id: 1 } }),
          <span>Section 1</span>,
          <A href={url("/sections/:id", { params: { id: 1 } })}>Section 1</A>,
        )}
        {" | "}
        {at(
          url("/sections/:id", { params: { id: 2 } }),
          <span>Section 2</span>,
          <A href={url("/sections/:id", { params: { id: 2 } })}>Section 2</A>,
        )}
      </p>
    </nav>
  );
};
