import { Component } from "react";

class UserInfo extends Component {
    render() {
        return (
            <div style={{ whiteSpace : 'nowrap', display : 'flex', alignItems : 'center' }}>
                <div className='profile-img mx-2'>
                    <img src="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2014/11/2014_44_interstellar_film_still.jpg?itok=k0YgBmLF" alt="" />
                </div>
                <div className='user-text'>
                    musahesenli
                </div>
            </div>
        )
    }
};

export default UserInfo;