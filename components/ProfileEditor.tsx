type ProfileEditorProps = {
  nickname: string;
  bio: string;
  onNicknameChange: (value: string) => void;
  onBioChange: (value: string) => void;
};

const NICKNAME_LIMIT = 30;
const BIO_LIMIT = 200;

export function ProfileEditor({
  nickname,
  bio,
  onNicknameChange,
  onBioChange,
}: ProfileEditorProps) {
  return (
    <section className="editor-block">
      <h2 className="section-title">Profile Card Builder</h2>
      <div className="input-shell">
        <label htmlFor="nickname" className="input-label">
          Nickname
        </label>
        <input
          id="nickname"
          className="input-control"
          placeholder="e.g. Chain Architect"
          value={nickname}
          onChange={(event) =>
            onNicknameChange(event.target.value.slice(0, NICKNAME_LIMIT))
          }
          maxLength={NICKNAME_LIMIT}
        />
        <p className="counter-text">{nickname.length}/30</p>
      </div>

      <div className="input-shell">
        <label htmlFor="bio" className="input-label">
          Bio
        </label>
        <textarea
          id="bio"
          className="input-control input-textarea"
          placeholder="Write your onchain identity summary."
          value={bio}
          onChange={(event) => onBioChange(event.target.value.slice(0, BIO_LIMIT))}
          maxLength={BIO_LIMIT}
          rows={5}
        />
        <p className="counter-text">{bio.length}/200</p>
      </div>
    </section>
  );
}
