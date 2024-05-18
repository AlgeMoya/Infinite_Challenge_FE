import ".././App.css";

type KeywordBoxProps = {
  sickNm: string;
};

function KeywordBox({ sickNm }: KeywordBoxProps) {
  return (
    <div className="KeywordBox">
      <div className="KeywordIcon">🔍</div>
      <a
        className="KeywordTitle"
        href={`https://clinicaltrialskorea.com/studies/${encodeURIComponent(
          sickNm
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {sickNm}
      </a>
    </div>
  );
}

export default KeywordBox;
