// import className from '../assets/styles/footer.styl'
import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'PK'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>study by {this.author}</span>
            </div>
        )
    }
}