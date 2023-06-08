RESTORE=$(echo '\033[0m')
RED=$(echo '\033[00;31m')
GREEN=$(echo '\033[00;32m')
YELLOW=$(echo '\033[00;33m')
CYAN=$(echo '\033[00;36m')
MAGENTA=$(echo '\033[00;35m')
for f in $(find . -name "*.gjf"); do
        filename="$(basename -s .gjf $f)"
        echo "${YELLOW}$filename${RESTORE} job started at $(date +%H:%M:%S)"
        g16 <$(basename -s .gjf $f).gjf> $(basename -s .gjf $f).log
        formchk $(basename -s .gjf $f).chk $(basename -s .gjf $f).fchk
        if grep -q Normal "$filename.log"; then
		mkdir ~aritra/gaussian/output/success/$(basename -s .gjf $f)
                echo "${MAGENTA}=>${RESTORE} Ongoing job${GREEN} FINISHED SUCCESSFULLY${RESTORE} at $(date +%H:%M:%S)"
                mv $(basename -s .gjf $f).log ~aritra/gaussian/output/success/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).chk ~aritra/gaussian/output/success/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).gjf ~aritra/gaussian/output/success/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).fchk ~aritra/gaussian/output/success/$(basename -s .gjf $f)
                echo "\n${YELLOW}$filename.gjf${RESTORE}, ${YELLOW}$filename.log${RESTORE}, ${YELLOW}$filename.chk${RESTORE} & ${YELLOW}$filename.fchk${RESTORE} files have been moved into the ${CYAN}output/success/$filename${RESTORE} folder\n-----------------\n"
        else
		mkdir ~aritra/gaussian/output/error/$(basename -s .gjf $f)
                echo "${MAGENTA}=>${RESTORE} Ongoing job ${RED}TERMINATED${RESTORE} at $(date +%H:%M:%S)"
                mv $(basename -s .gjf $f).log ~aritra/gaussian/output/error/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).chk ~aritra/gaussian/output/error/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).gjf ~aritra/gaussian/output/error/$(basename -s .gjf $f)
                mv $(basename -s .gjf $f).fchk ~aritra/gaussian/output/error/$(basename -s .gjf $f)
                echo "\n${YELLOW}$filename.gjf${RESTORE}, ${YELLOW}$filename.log${RESTORE}, ${YELLOW}$filename.chk${RESTORE} & ${YELLOW}$filename.fchk${RESTORE} files have been moved into the ${CYAN}output/error/$filename${RESTORE} folder\n-----------------\n"
        fi
	sleep 10
done
