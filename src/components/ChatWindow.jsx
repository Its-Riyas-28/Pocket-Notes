import React from 'react'; 
import MessageInput from './MessageInput'; 

const ChatWindow = ({ notes, addNote, groupName, groupColor }) => {
    const getInitials = (name) => {
        if (!name) return ''; 
        const words = name.split(' ');
        if (words.length === 1) {
            const first = words[0].charAt(0);
            const middleIndex = Math.floor(words[0].length / 2);
            const middle = words[0].charAt(middleIndex);
            return `${first}${middle}`;
        } else {
            return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`;
        }
    };

    const initials = getInitials(groupName || '');

    const formatDate = (date) => {
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; 
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${day} ${month} ${year} . ${hours}:${formattedMinutes} ${ampm}`;
    };

    return (
        <div className="chat-window">
            <div className="chat-header" style={{ backgroundColor: '#001F8B' }}>
                <div className="flex-container" style={{ alignItems: 'center' }}>
                    <div className="icon" style={{ backgroundColor: groupColor }}>
                        {initials.toUpperCase() || '?'}
                    </div>
                    <h2 style={{ marginLeft: '10px', color: 'white' }}>{groupName || 'Select a group'}</h2>
                </div>
            </div>
            <div className="chat-body">
                {notes.map((note, index) => {
                    const timestamp = formatDate(new Date(note.date));
                    return (
                        <div key={index} className="chat-message">
                            {note.text}
                            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'gray' }}>
                                {timestamp}
                            </div>
                        </div>
                    );
                })}
            </div>
            <MessageInput addNote={addNote} />
        </div>
    );
};

export default ChatWindow;
