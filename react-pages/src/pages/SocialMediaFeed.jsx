import { Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function SocialMediaFeed() {
    const [posts, setPosts] = useState([
        { id: 1, user: 'Sarah Jenkins', handle: '@sarahj', avatar: '#f43f5e', content: 'Just launched my new portfolio! 🚀 Really excited to share this with everyone. Check it out at sarah.dev', likes: 124, comments: 12, time: '2h' },
        { id: 2, user: 'Tech Insider', handle: '@techinsider', avatar: '#3b82f6', content: ' Breaking: New JavaScript runtime released today promised 10x faster startup times compared to Node.js.', likes: 892, comments: 245, time: '4h' },
        { id: 3, user: 'Dev Humor', handle: '@devhumor', avatar: '#10b981', content: 'My code doesn\'t work, I have no idea why.\nMy code works, I have no idea why.', likes: 4500, comments: 89, time: '6h' }
    ]);

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <main style={{ width: '100%', maxWidth: '600px', backgroundColor: 'white', borderLeft: '1px solid #e5e5e5', borderRight: '1px solid #e5e5e5', minHeight: '100vh' }}>

                {/* Header */}
                <header style={{ padding: '15px 20px', borderBottom: '1px solid #e5e5e5', backgroundColor: 'rgba(255,255,255,0.9)', position: 'sticky', top: 0, backdropFilter: 'blur(10px)', zIndex: 10 }}>
                    <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 800 }}>Home</h1>
                </header>

                {/* Compose Tweet */}
                <div style={{ padding: '20px', borderBottom: '1px solid #e5e5e5', display: 'flex', gap: '15px' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#a855f7', borderRadius: '50%', flexShrink: 0 }}></div>
                    <div style={{ flex: 1 }}>
                        <textarea
                            placeholder="What's happening?"
                            style={{ width: '100%', border: 'none', minHeight: '60px', fontSize: '20px', outline: 'none', resize: 'none' }}
                        />
                        <div style={{ borderBottom: '1px solid #e5e5e5', margin: '10px 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '15px', color: '#3b82f6' }}>
                                <ImageIcon size={20} style={{ cursor: 'pointer' }} />
                            </div>
                            <button style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer' }}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feed */}
                <div>
                    {posts.map(post => (
                        <article key={post.id} style={{ padding: '20px', borderBottom: '1px solid #e5e5e5', display: 'flex', gap: '15px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: post.avatar, borderRadius: '50%', flexShrink: 0 }}></div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 700, fontSize: '15px' }}>{post.user}</span>
                                        <span style={{ color: '#737373', fontSize: '15px' }}>{post.handle}</span>
                                        <span style={{ color: '#737373', fontSize: '15px' }}>· {post.time}</span>
                                    </div>
                                    <MoreHorizontal size={20} color="#737373" />
                                </div>

                                <p style={{ margin: '0 0 15px 0', fontSize: '15px', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                                    {post.content}
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#737373', maxWidth: '400px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <MessageCircle size={18} />
                                        <span style={{ fontSize: '13px' }}>{post.comments}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#ef4444' }}>
                                        <Heart size={18} fill="#ef4444" />
                                        <span style={{ fontSize: '13px' }}>{post.likes}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <Share2 size={18} />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
