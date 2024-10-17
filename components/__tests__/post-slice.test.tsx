import reducer, { setPosts, clearPosts } from '../../store/posts-slice';
import { IPost } from '../../store/posts-slice';

describe('posts slice', () => {
  const initialState = {
    posts: null,
    isLoading: true,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setPosts', () => {
    const mockPosts: IPost[] = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const actual = reducer(initialState, setPosts(mockPosts));
    expect(actual.posts).toEqual(mockPosts);
    expect(actual.isLoading).toEqual(false);
  });

  it('should handle clearPosts', () => {
    const stateWithPosts = {
      posts: [
        { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      ],
      isLoading: false,
    };
    const actual = reducer(stateWithPosts, clearPosts());
    expect(actual.posts).toEqual(null);
    expect(actual.isLoading).toEqual(false);
  });
});