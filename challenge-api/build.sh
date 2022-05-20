wire

export GOOS=windows
export GOARCH=amd64
rm ../challenge-details/api/windows-amd64.exe
go build -o ../challenge-details/api/windows-amd64.exe .
echo "windows-amd64 completed"

export GOOS=windows
export GOARCH=arm64
rm ../challenge-details/api/windows-arm64.exe
go build -o ../challenge-details/api/windows-arm64.exe .
echo "windows-arm64 completed"

export GOOS=darwin
export GOARCH=amd64
rm ../challenge-details/api/macos-amd64
go build -o ../challenge-details/api/macos-amd64 .
echo "macos-amd64 completed"

export GOOS=darwin
export GOARCH=arm64
rm ../challenge-details/api/macos-arm64
go build -o ../challenge-details/api/macos-arm64 .
echo "macos-arm64 completed"

export GOOS=linux
export GOARCH=amd64
rm ../challenge-details/api/linux-amd64
go build -o ../challenge-details/api/linux-amd64 .
echo "linux-amd64 completed"

export GOOS=linux
export GOARCH=arm64
rm ../challenge-details/api/linux-arm64
go build -o ../challenge-details/api/linux-arm64 .
echo "linux-arm64 completed"