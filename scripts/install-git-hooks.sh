GIT_DIR="$(git rev-parse --git-dir)"
SRC_DIR="scripts/git-hooks"
HOOK_DIR="${GIT_DIR}/hooks"

if [ ! -d "$HOOK_DIR" ]; then
    mkdir -p "$HOOK_DIR"
fi

cd "$HOOK_DIR"
for hook in "${SRC_DIR}/"*; do
    DEST_FILE="$(basename "$hook")"
    SRC_FILE="${SRC_DIR}/${DEST_FILE}"

    if [ ! -h "$DEST_FILE" -a -x "$DEST_FILE" ]; then
        mv -v "$DEST_FILE" "${DEST_FILE}.local"
    fi

    ln -fsv "$SRC_FILE" "$DEST_FILE"
done

echo "Installed Git Hooks."