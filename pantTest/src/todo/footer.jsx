import className from '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'PK'
        }
    },
    render() {
        return (
            <div id={className.footer}>
                <span>study by {this.author}</span>
            </div>
        )
    }
}