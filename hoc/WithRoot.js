import { Provider } from 'react-redux';
import configure from '../store/configure';
const WithRoot = (WrappedComponent) => {
    const store = configure();
    return (
        class WithRootWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <WrappedComponent {...this.props}/>
                    </Provider>
                )
            }
        }
    )
};
export default WithRoot;