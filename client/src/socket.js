import io from 'socket.io-client'

const newSocket = io('http://localhost:3005')

export default newSocket
