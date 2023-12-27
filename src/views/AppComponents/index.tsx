import { Button, Col, Row } from "antd";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import InputField from "../../shared/components/InputField";
import "./appComponents.scss";
// import { increment,decrement } from "../../actions";
import { AppState } from "../../store2";
import { useSelector, useDispatch,connect } from 'react-redux';
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];
interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
interface AppComponentsProps { }

const AppComponents: FC<CounterProps> = (props) => {
  // const count = useSelector((state: AppState) => state.count);
  const dispatch = useDispatch();
  const {count,increment , decrement} = props;
  return (
    <div className="app-components">
      <h1 className="text-center text-decoration">App Components</h1>
      <Formik initialValues={{}} onSubmit={() => { }}>
        <Form>
          <InputField type="text" name="input" placeholder="Enter some text" />
          <div className="mt-5">
            <Button type="primary" className="mr-4">
              Primary Button
            </Button>
            <Button>Default Button</Button>
          </div>
        </Form>
      </Formik>

      <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    
    </div>
  );
};
const mapStateToProps = (state: { count: number }) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppComponents);
// export default AppComponents;
