import React from 'react'; 

const Sidebar = ({ noteGroups, addNoteGroup, onGroupSelect }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [newGroupName, setNewGroupName] = React.useState('');
    const [selectedColor, setSelectedColor] = React.useState('#B38BFA');
    const [selectedGroupIndex, setSelectedGroupIndex] = React.useState(null); 

    const handleAddGroupClick = () => {
        setShowModal(true);
    };

    const handleCreateGroup = () => {
        if (newGroupName.trim()) {
            addNoteGroup({ name: newGroupName, color: selectedColor });
            setNewGroupName('');
            setSelectedColor('#B38BFA');
            setShowModal(false);
        }
    };

    const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

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
  

    const handleGroupClick = (group, index) => {
        onGroupSelect(group);
        setSelectedGroupIndex(index); 
    };

    return (
        <div className="sidebar">
            <h2>Pocket Notes</h2>
            <ul>
                {noteGroups.map((group, index) => {
                    const initials = getInitials(group.name);
                    return (
                        <li 
                          key={index} 
                          onClick={() => handleGroupClick(group, index)} 
                          style={{ 
                            backgroundColor: selectedGroupIndex === index ? '#2F2F2F2B' : 'whitesmoke',
                            borderRadius: selectedGroupIndex === index ? '1rem' : '0',
                            padding: '10px 15px',
                        }}
                        
                        >
                            <div className="icon" style={{ backgroundColor: group.color }}>{initials.toUpperCase()}</div>
                            {group.name}
                        </li>
                    );
                })}
            </ul>
            <button className="add-group-btn" onClick={handleAddGroupClick}>+</button>

            {showModal && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <h3 style={{ color: 'black' }}>Create New Group</h3>
                        <div className="flex-container">
                            <label style={{ margin: 0, fontWeight: 600 }}>Group Name</label>
                            <input
                                type="text"
                                placeholder="Enter group name"
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                            />
                        </div>
                        <div className="flex-container">
                            <label style={{ margin: 0, fontWeight: 600 }}>Choose colour</label>
                            <div className="color-options">
                                {colorOptions.map((color) => (
                                    <div
                                        key={color}
                                        className="color-option"
                                        style={{ backgroundColor: color, border: selectedColor === color ? '2px solid black' : '2px solid transparent' }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <button onClick={handleCreateGroup}>Create</button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Sidebar;
