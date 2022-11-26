import { useLocation } from "react-router-dom";

export default function Test() {

  const location = useLocation();
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach

  console.log(name)
  console.log(credit)
  console.log(teach)
}
