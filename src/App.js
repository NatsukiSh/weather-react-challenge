import "./App.css";
import Weather from "./Weather";
import Format from "./Format";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: `Pink`, height: `100vh` }}
      >
        <Weather />
        <Format />
      </Typography>
    </Container>
  );
};

export default App;
