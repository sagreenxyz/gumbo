import { useRouter } from 'next/router'

const Comment = () => {
    const router = useRouter()
    const { comment } = router.query
    return <p>Comment: {comment}</p>
}

export default Comment