import React from 'react';

let title = "hello";
let author = "Matt";
let pages = 30;

class Library  extends React.Component {
            state={
                open: false,
                data: [],
                loading: false
            }

            componentDidUpdate(prevProps, prevState, snapshot) {
                console.log("The component did update")
            }
            componentDidMount() {
                this.setState({loading: true})
                fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/2')
                    .then(data => data.json())
                    .then(data => this.setState({data,loading: false}))
            }

    toggleOpenClosed =() =>{
                this.setState(prevState =>({
                    open: !prevState.open
                }))
            }

            render() {
                return (
                    <section>
                        {this.state.loading
                            ?"loading..."
                                :<div>
                                    {this.state.data.map(product =>{
                                            return(
                                                <div key={product.id}>
                                                    <h3>Book of thw week</h3>
                                                    <h4>{product.name}</h4>
                                                    <img src={product.image} height={100} alt={product.name}/>
                                                </div>
                                            )
                                    })}
                                </div>
                        }
                        <h1>The Book is {this.state.open ? 'open' : 'closed'}</h1>
                        <button onClick={this.toggleOpenClosed}>Toggle button</button>
                        <h2>{title}</h2>
                        <p>by: {author}</p>
                        <p>{pages} pages</p>
                    </section>
                )
            }
}
export default  Library;