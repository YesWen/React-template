import { Button } from "antd";
import useCounterStore from "@/store/counter";

const Home = () => {
    const counter = useCounterStore((state) => state.counter);
    const increase = useCounterStore((state) => state.increase);

    return (
        <div className=" o-p-50px">
            <div className="o-m-b-20px">Home Page</div>
            <Button type="primary" onClick={() => increase(1)}>
                counter: {counter}
            </Button>
        </div>
    );
};

export default Home;
