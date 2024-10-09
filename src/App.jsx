import React from 'react'; 
import Sidebar from './components/Sidebar'; 
import ChatWindow from './components/ChatWindow'; 
import FrontPage from './components/FrontPage'; // Import your new FrontPage component

const App = () => {
    const [noteGroups, setNoteGroups] = React.useState(() => {
        const savedGroups = localStorage.getItem('noteGroups');
        return savedGroups ? JSON.parse(savedGroups) : []; 
    });
    const [selectedGroup, setSelectedGroup] = React.useState(null);
    const [notes, setNotes] = React.useState([]);

    const addNoteGroup = (group) => {
        const newGroups = [...noteGroups, group];
        setNoteGroups(newGroups);
        localStorage.setItem('noteGroups', JSON.stringify(newGroups)); 
    };

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
        const groupKey = `notes_${group.name}`;
        const groupNotes = JSON.parse(localStorage.getItem(groupKey)) || [];
        setNotes(groupNotes); 
    };

    const addNote = (note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        const groupKey = `notes_${selectedGroup.name}`;
        localStorage.setItem(groupKey, JSON.stringify(newNotes));
    };

    return (
        <div className="app-container">
            <Sidebar noteGroups={noteGroups} addNoteGroup={addNoteGroup} onGroupSelect={handleGroupSelect} />
            {selectedGroup ? (
                <ChatWindow notes={notes} addNote={addNote} groupName={selectedGroup.name} groupColor={selectedGroup.color} />
            ) : (
                <FrontPage /> // Show the FrontPage component when no group is selected
            )}
        </div>
    );
};

export default App;
